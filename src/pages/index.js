import { useRouter } from 'next/router';

function RedirectPage({ ctx }) {
  const router = useRouter();
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    router.push('/oferta');
    return;
  }
}

RedirectPage.getInitialProps = (ctx) => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: '/oferta' });
    ctx.res.end();
  }
  return {};
};

export default RedirectPage;
