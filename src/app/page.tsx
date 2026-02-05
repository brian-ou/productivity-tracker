"use client";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b0b0f", color: "white" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div>
            <h1 style={{ fontSize: 40, margin: 0, letterSpacing: -0.5 }}>Productivity Tracker</h1>
            <p style={{ marginTop: 10, opacity: 0.75, lineHeight: 1.6 }}>
              One dashboard for <b>Google Calendar</b> + <b>Canvas</b> assignments. Plan your day, stay ahead.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button
              style={{
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => alert("Auth next: NextAuth sign-in")}
            >
              Sign in
            </button>

            <button
              style={{
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "white",
                color: "#0b0b0f",
                cursor: "pointer",
                fontWeight: 600,
              }}
              onClick={() => alert("Next: Connect Google + Canvas")}
            >
              Connect accounts
            </button>
          </div>
        </div>

        <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 14 }}>
          <section
            style={{
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              padding: 18,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 16, opacity: 0.85 }}>Today</h2>
            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              <Card title="Calendar" desc="Pull upcoming events, detect free blocks, and auto-suggest focus sessions." />
              <Card title="Assignments" desc="Aggregate Canvas due dates + announcements into a single queue." />
              <Card title="Daily plan" desc="Generate a prioritized schedule you can actually follow." />
            </div>
          </section>

          <aside
            style={{
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.03)",
              padding: 18,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 16, opacity: 0.85 }}>Status</h2>

            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              <StatusRow label="Local dev" value="Running" ok />
              <StatusRow label="Auth" value="Not configured" />
              <StatusRow label="Database" value="Not migrated" />
              <StatusRow label="Google sync" value="Not started" />
              <StatusRow label="Canvas sync" value="Not started" />
            </div>

            <div style={{ marginTop: 16, fontSize: 13, opacity: 0.7, lineHeight: 1.5 }}>
              Next: set up Google OAuth + Canvas OAuth, then run Prisma migration and start syncing.
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      style={{
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(0,0,0,0.25)",
        padding: 14,
      }}
    >
      <div style={{ fontWeight: 650 }}>{title}</div>
      <div style={{ marginTop: 6, opacity: 0.75, lineHeight: 1.5, fontSize: 14 }}>{desc}</div>
    </div>
  );
}

function StatusRow({ label, value, ok }: { label: string; value: string; ok?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
      <div style={{ opacity: 0.7 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: 999,
            background: ok ? "#34d399" : "rgba(255,255,255,0.25)",
            display: "inline-block",
          }}
        />
        <span style={{ fontWeight: 600 }}>{value}</span>
      </div>
    </div>
  );
}