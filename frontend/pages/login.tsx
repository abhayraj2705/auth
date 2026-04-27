import { FEATURES } from '@/config/features';
export { default } from '@/templates/auth/pages/login';
export async function getStaticProps() {
  if (!FEATURES.auth) return { notFound: true };
  return { props: {} };
}
