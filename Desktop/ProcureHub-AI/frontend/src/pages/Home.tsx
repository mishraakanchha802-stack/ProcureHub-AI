import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { FaRobot, FaUsers, FaChartLine } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />

      <section
        style={{
          minHeight: "90vh",
          background:
            "linear-gradient(135deg, #0f172a, #1e293b, #111827)",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",

        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          ProcureHub AI
        </h1>

        <p
          style={{
            fontSize: "24px",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          Transforming Procurement With Artificial Intelligence,
          Reverse Auctions & Smart Vendor Management.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button
            style={{
              padding: "15px 30px",
              marginRight: "15px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>

          <button
            style={{
              padding: "15px 30px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Watch Demo
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "80px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <FaRobot size={40} />
            <h3>AI Assistant</h3>
          </div>

          <div>
            <FaUsers size={40} />
            <h3>Vendor Network</h3>
          </div>

          <div>
            <FaChartLine size={40} />
            <h3>Reverse Auctions</h3>
          </div>
        </div>
      </section>
      <section
  style={{
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
    gap: "80px",
    flexWrap: "wrap",
    textAlign: "center",
  }}
>
  <div>
    <h2>50K+</h2>
    <p>Verified Vendors</p>
  </div>

  <div>
    <h2>10K+</h2>
    <p>Live Auctions</p>
  </div>

  <div>
    <h2>1M+</h2>
    <p>RFQs Processed</p>
  </div>

  <div>
    <h2>24/7</h2>
    <p>AI Assistant</p>
  </div>
</section>
<section
  style={{
    padding: "80px 20px",
    textAlign: "center",
  }}
>
  <h2 style={{ marginBottom: "40px" }}>
    Powerful Features
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    }}
  >
    <div style={{ border: "1px solid #ddd", padding: "25px", width: "250px" }}>
      <h3>AI Vendor Matching</h3>
      <p>Find the best suppliers automatically.</p>
    </div>

    <div style={{ border: "1px solid #ddd", padding: "25px", width: "250px" }}>
      <h3>Reverse Auctions</h3>
      <p>Reduce procurement costs efficiently.</p>
    </div>

    <div style={{ border: "1px solid #ddd", padding: "25px", width: "250px" }}>
      <h3>Analytics Dashboard</h3>
      <p>Track spending and vendor performance.</p>
    </div>

    <div style={{ border: "1px solid #ddd", padding: "25px", width: "250px" }}>
      <h3>Procurement Automation</h3>
      <p>Automate RFQs, approvals and workflows.</p>
    </div>
  </div>
</section>
{/* WHY CHOOSE US */}

<section
  style={{
    padding: "100px 20px",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
  }}
>
  <h2 style={{ fontSize: "42px" }}>
    Why Choose ProcureHub AI?
  </h2>

  <p
    style={{
      maxWidth: "800px",
      margin: "20px auto",
      color: "#cbd5e1",
    }}
  >
    AI powered procurement platform helping enterprises
    automate sourcing, reduce costs and manage suppliers
    efficiently.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      marginTop: "50px",
    }}
  >
    <div
      style={{
        width: "300px",
        background: "#1e293b",
        padding: "30px",
        borderRadius: "15px",
      }}
    >
      <h3>⚡ Faster Procurement</h3>
      <p>
        Reduce sourcing time by 70% using AI workflows.
      </p>
    </div>

    <div
      style={{
        width: "300px",
        background: "#1e293b",
        padding: "30px",
        borderRadius: "15px",
      }}
    >
      <h3>🤖 Smart AI Assistant</h3>
      <p>
        AI suggests vendors and automates RFQs.
      </p>
    </div>

    <div
      style={{
        width: "300px",
        background: "#1e293b",
        padding: "30px",
        borderRadius: "15px",
      }}
    >
      <h3>📈 Cost Optimization</h3>
      <p>
        Reverse auctions drive competitive pricing.
      </p>
    </div>
  </div>
</section>{/* TESTIMONIALS */}

<section
  style={{
    padding: "100px 20px",
    textAlign: "center",
    background: "#f8fafc",
  }}
>
  <h2 style={{ fontSize: "42px" }}>
    Trusted By Procurement Teams
  </h2>

  <p
    style={{
      color: "#64748b",
      marginTop: "10px",
    }}
  >
    What our clients say about ProcureHub AI
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      marginTop: "50px",
    }}
  >
    <div
      style={{
        width: "320px",
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h3>⭐⭐⭐⭐⭐</h3>
      <p>
        ProcureHub AI reduced our sourcing cycle by
        more than 60%.
      </p>
      <h4>- Procurement Manager</h4>
    </div>

    <div
      style={{
        width: "320px",
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h3>⭐⭐⭐⭐⭐</h3>
      <p>
        Reverse auctions helped us save thousands
        every month.
      </p>
      <h4>- Operations Head</h4>
    </div>

    <div
      style={{
        width: "320px",
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h3>⭐⭐⭐⭐⭐</h3>
      <p>
        Best procurement platform we've used so far.
      </p>
      <h4>- Supply Chain Director</h4>
    </div>
  </div>
</section>
{/* PRICING */}

<section
  style={{
    padding: "100px 20px",
    textAlign: "center",
    background: "#0f172a",
    color: "white",
  }}
>
  <h2 style={{ fontSize: "42px" }}>
    Pricing Plans
  </h2>

  <p style={{ color: "#cbd5e1" }}>
    Flexible plans for startups and enterprises
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      marginTop: "50px",
    }}
  >
    <div
      style={{
        width: "280px",
        background: "#1e293b",
        padding: "30px",
        borderRadius: "15px",
      }}
    >
      <h3>Starter</h3>
      <h1>$29/mo</h1>
      <p>Vendor Management</p>
      <p>RFQ Creation</p>
      <p>Email Support</p>
    </div>

    <div
      style={{
        width: "320px",
        background: "#2563eb",
        padding: "35px",
        borderRadius: "15px",
      }}
    >
      <h3>Pro</h3>
      <h1>$99/mo</h1>
      <p>Everything in Starter</p>
      <p>Reverse Auctions</p>
      <p>AI Assistant</p>
      <p>Analytics Dashboard</p>
    </div>

    <div
      style={{
        width: "280px",
        background: "#1e293b",
        padding: "30px",
        borderRadius: "15px",
      }}
    >
      <h3>Enterprise</h3>
      <h1>Custom</h1>
      <p>Unlimited Vendors</p>
      <p>Custom Integrations</p>
      <p>Dedicated Support</p>
    </div>
  </div>
</section>
<Footer/>

    </>
  );
}