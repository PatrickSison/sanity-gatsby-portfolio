import React from "react";

import Container from "../components/container";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>There&#39;s nothing here for you.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
