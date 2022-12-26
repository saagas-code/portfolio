import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
        <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta
            name="keywords"
            content="Matheus Almeida, programador, web, websites, Desenvolvedor Web Frontend, Desenvolvedor Web Backend developer, desenvolvimento, programação, frontend, front-end, HTML, CSS, JavaScript, ReactJS, NextJS, website, portfolio, Profissional de TI, Desenvolvimento de Sites"
          />
          <meta
            name="description"
            content="Me chamo Matheus Almeida e sou um desenvolvedor Full-Stack"
          />
          <meta name="robots" content="index, follow" />
          <meta name="rating" content="general" />
          <meta name="language" content="pt-BR" />
          <meta httpEquiv="content-language" content="pt-br" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <meta name="theme-color" content="#00d9ff" />
          <meta name="author" content="Matheus Almeida" />
          <meta name="creator" content="Matheus Almeida" />
          <meta name="copyright" content="© 2022 Matheus Almeida" />

          <meta property="og:site_name" content="Portfolio - Matheus Almeida" />
          <meta
            property="og:title"
            content="Matheus Almeida | Desenvolvedor"
          />
          <meta
            property="og:description"
            content="Me chamo Matheus Almeida e sou um desenvolvedor Full-Stack."
          />

          <meta property="og:image" content="/ogimage.png" />
          <meta property="og:type" content="website" />
          <meta name="twitter:image" content="/ogimage.png" />

          <link rel="icon" href="/icon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
