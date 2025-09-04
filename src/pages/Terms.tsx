import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <Layout>
      <SEO 
        title="Terms of Service - Kodiak Solutions Limited"
        description="Read the terms and conditions for using Kodiak Solutions Limited services and website."
      />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using Kodiak Solutions Limited services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Services</h2>
              <p className="mb-4">
                Kodiak Solutions Limited provides gold mining consultancy, elution services, mining chemicals, and equipment solutions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
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

export default Terms;