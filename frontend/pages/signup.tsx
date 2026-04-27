import { FEATURES } from '@/config/features';
export { default } from '@/templates/auth/pages/signup';
export async function getStaticProps() {
  if (!FEATURES.auth) return { notFound: true };
  return { props: {} };
}
