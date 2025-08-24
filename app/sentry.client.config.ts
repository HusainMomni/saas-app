import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://351b92f5b606a5a68ac3d563a45f1597@o4509894513721344.ingest.us.sentry.io/4509894528729088',
  tracesSampleRate: 1.0,
});
