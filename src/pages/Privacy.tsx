import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy - Kodiak Solutions Limited"
        description="Learn about how Kodiak Solutions Limited protects and handles your personal information and data privacy."
      />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="mb-4">
                At Kodiak Solutions Limited, we collect information to provide better services to our clients.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
              <p className="mb-4">
                We use the information we collect to provide, maintain, and improve our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:info@kodiaksolutions.co.ke" className="text-primary hover:underline">
                  info@kodiaksolutions.co.ke
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;