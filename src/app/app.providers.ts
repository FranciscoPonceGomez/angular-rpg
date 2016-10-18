import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {LoadingService} from './components/loading/loading.service';
import {SERVICE_PROVIDERS} from './services/index';
import {MODEL_PROVIDERS} from './models/index';
import {WORLD_PROVIDERS} from './routes/world/index';
import {AppEffects} from './app.effects';

export const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  ...SERVICE_PROVIDERS,
  ...MODEL_PROVIDERS,
  ...WORLD_PROVIDERS,
  AppEffects,
  LoadingService
];
