"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import { findDemoAccountById, type DemoAccount } from "@/lib/demo-auth";

type DemoSession = {
  account: DemoAccount | null;
  logIn: (account: DemoAccount) => void;
  logOut: () => void;
};

const SESSION_KEY = "studypal-demo-account";
const SESSION_CHANGE_EVENT = "studypal-session-change";
const DemoSessionContext = createContext<DemoSession | null>(null);

function subscribeToSession(onChange: () => void) {
  window.addEventListener(SESSION_CHANGE_EVENT, onChange);
  return () => window.removeEventListener(SESSION_CHANGE_EVENT, onChange);
}

function getSessionSnapshot() {
  const savedAccountId = window.sessionStorage.getItem(SESSION_KEY);
  return savedAccountId ? findDemoAccountById(savedAccountId) ?? null : null;
}

function getServerSessionSnapshot() {
  return null;
}

export function DemoSessionProvider({ children }: { children: ReactNode }) {
  const account = useSyncExternalStore(subscribeToSession, getSessionSnapshot, getServerSessionSnapshot);

  function logIn(nextAccount: DemoAccount) {
    window.sessionStorage.setItem(SESSION_KEY, nextAccount.id);
    window.dispatchEvent(new Event(SESSION_CHANGE_EVENT));
  }

  function logOut() {
    window.sessionStorage.removeItem(SESSION_KEY);
    window.dispatchEvent(new Event(SESSION_CHANGE_EVENT));
  }

  return <DemoSessionContext.Provider value={{ account, logIn, logOut }}>{children}</DemoSessionContext.Provider>;
}

export function useDemoSession() {
  const session = useContext(DemoSessionContext);
  if (!session) throw new Error("useDemoSession must be used inside DemoSessionProvider.");
  return session;
}
