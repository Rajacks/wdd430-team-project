"use client";

import { useMemo, useState } from "react";
import { DashboardShell } from "@/components/DashboardShell";
import { Icon } from "@/components/Icon";
import { StudentCard } from "@/components/StudentCard";
import { students } from "@/lib/sample-data";

export default function DiscoverPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All courses");
  const [searched, setSearched] = useState("");
  const results = useMemo(() => students.filter((student) => {
    const matchesQuery = !searched || student.courses.some((course) => course.toLowerCase().includes(searched.toLowerCase()));
    const matchesFilter = filter === "All courses" || student.courses.includes(filter);
    return matchesQuery && matchesFilter;
  }), [filter, searched]);

  return <DashboardShell>
    <div className="page-heading"><div><span className="eyebrow">YOUR PEOPLE ARE HERE</span><h1>Find students</h1><p>Find classmates in your courses and make learning a team effort.</p></div></div>
    <form className="discover-search card" onSubmit={(event) => { event.preventDefault(); setSearched(query.trim()); }}>
      <span className="search-sparkle"><Icon name="search" size={20} /></span><label className="search-field"><span>Search by course code</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try CSE341 or ITM111..." /></label><button className="button button-primary" type="submit">Find students <Icon name="arrow" size={16} /></button>
    </form>
    <div className="results-toolbar"><div><h2>Students to know <span className="result-count">{results.length}</span></h2><p>Good people, great study sessions.</p></div><label className="filter-control"><Icon name="filter" size={17} /><span className="sr-only">Filter by course</span><select value={filter} onChange={(event) => setFilter(event.target.value)}><option>All courses</option>{["CSE111", "CSE210", "CSE341", "CSE340", "ITM111"].map((course) => <option key={course}>{course}</option>)}</select></label></div>
    {results.length > 0 ? <div className="student-grid">{results.map((student) => <StudentCard key={student.id} student={student} />)}</div> : <div className="empty-state card"><span className="empty-icon"><Icon name="search" size={24} /></span><h3>No classmates found just yet</h3><p>Try a different course code or clear the course filter.</p><button className="button button-outline button-small" onClick={() => { setQuery(""); setSearched(""); setFilter("All courses"); }}>Clear search</button></div>}
  </DashboardShell>;
}
