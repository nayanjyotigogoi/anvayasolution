import Head from "next/head";

export default function TermsOfServicePage() {
  return (
    <>
      <Head>
        <title>Terms of Service | Anvaya Solution</title>
        <meta
          name="description"
          content="Review the Terms of Service for Anvaya Solution, covering user responsibilities, payments, IP rights, and service limitations."
        />
        <meta
          name="keywords"
          content="Anvaya terms of service, service agreement, IT company legal terms, software contract, business IT policies"
        />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Effective Date: July 1, 2024
          </p>
        </header>

        <section className="space-y-10 text-base leading-relaxed">
          <div>
            <p>
              These Terms of Service govern your use of Anvaya Solution’s website, digital platforms, and professional services. By accessing or engaging with our offerings, you agree to these terms and conditions in full.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-gray-700">
              1. Scope of Services
            </h2>
            <p>
              Anvaya Solution provides IT consulting, AI automation, website and mobile app development, cybersecurity, and business technology solutions. Details of the scope are provided in individual agreements or proposals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-gray-700">
              2. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate and up-to-date information during consultations or onboarding.</li>
              <li>Comply with our usage policies and applicable third-party terms when using integrated tools.</li>
              <li>Report issues or breaches immediately to our support team.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-gray-700">
              3. Payment & Invoicing
            </h2>
            <p>
              All services are billed according to the scope agreed upon. Invoices are typically issued before project initiation or on milestone completion. Failure to make timely payments may result in service delays or suspension.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-gray-700">
              4. Intellectual Property
            </h2>
            <p>
              Upon full payment, all code, content, and digital assets created by Anvaya for the client become the client’s property unless otherwise specified. Anvaya reserves the right to display completed work in portfolios unless restricted by NDA.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-gray-700">
              5. Limitation of Liability
            </h2>
            <p>
              Anvaya Solution is not responsible for indirect, incidental, or consequential damages resulting from delays, data loss, or third-party service failures. We make every effort to mitigate risks and provide timely support.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-gray-700">
              6. Termination
            </h2>
            <p>
              Either party may terminate an agreement with written notice. If a client breaches terms or fails to make payments, Anvaya reserves the right to suspend or terminate services immediately. All outstanding dues must be cleared before closure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-gray-700">
              7. Contact Information
            </h2>
            <p>
              For legal inquiries or further details about these terms, please reach out:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:admin@anvayasolution.com" className="text-primary underline">
                admin@anvayasolution.com
              </a>
              <br />
              <strong>Phone:</strong>{" "}
              <a href="tel:+919707385552" className="text-primary underline">
                +91 9707385552
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
