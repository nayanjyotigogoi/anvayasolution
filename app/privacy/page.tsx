import Head from "next/head";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Anvaya Solution</title>
        <meta
          name="description"
          content="Read Anvaya Solution's Privacy Policy to learn how we collect, use, and protect your personal data across all our platforms and services."
        />
        <meta
          name="keywords"
          content="Anvaya Solution privacy policy, user data, data protection, GDPR, IT company privacy terms"
        />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: July 1, 2024
          </p>
        </header>

        <section className="space-y-10 text-base leading-relaxed">
          <div>
            <p>
              At <strong>Anvaya Solution</strong>, your privacy is our
              priority. This Privacy Policy describes how we handle your data
              when you use our services, visit our website, or engage with us
              in any way.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-gray-700">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full name, email address, phone number</li>
              <li>Company or project-related data</li>
              <li>Website usage data (cookies, IP address, browser info)</li>
              <li>Chat, form, and support interaction logs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-gray-700">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and improve our services</li>
              <li>To personalize your experience and support</li>
              <li>To send you relevant updates and notifications</li>
              <li>To analyze usage for performance optimization</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-gray-700">
              3. Sharing & Security
            </h2>
            <p>
              We never sell your personal data. Your information is shared only
              with trusted partners when absolutely necessary — and always with
              strict confidentiality. All your data is encrypted and securely
              stored using industry best practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-gray-700">
              4. Your Rights & Choices
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Request a copy of your personal data</li>
              <li>Correct or update inaccurate information</li>
              <li>Withdraw consent for data usage</li>
              <li>Request deletion of your stored data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 border-b pb-1 border-gray-200 dark:border-gray-700">
              5. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this policy, feel free
              to reach out:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:admin@anvayasolution.com"
                className="text-primary underline"
              >
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
