export type DemoAccount = {
  id: "emmanuel" | "taeg";
  name: string;
  initials: string;
  program: string;
  profileHref: string;
  password: string;
};

export const demoAccounts: DemoAccount[] = [
  {
    id: "emmanuel",
    name: "Emmanuel Ndogo",
    initials: "EN",
    program: "Computer Science",
    profileHref: "/profile",
    password: "1",
  },
  {
    id: "taeg",
    name: "Taeg Dayley",
    initials: "TD",
    program: "StudyPal student",
    profileHref: "/profile/taeg-dayley",
    password: "1",
  },
];

export function findDemoAccountById(id: string) {
  return demoAccounts.find((account) => account.id === id);
}

export function authenticateDemoAccount(name: string, password: string) {
  const normalizedName = name.trim().toLocaleLowerCase();
  return demoAccounts.find((account) =>
    [account.name.toLocaleLowerCase(), account.name.split(" ")[0].toLocaleLowerCase()].includes(normalizedName)
    && account.password === password,
  );
}
