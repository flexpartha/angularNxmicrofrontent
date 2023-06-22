export * from './lib/auth.module';
export * from './lib/lib.routes';

export * from './lib/lib.routes';
//export { AuthGuard } from './lib/guards/auth/auth.guard';
export { authGuard } from './lib/guards/auth/auth.guard';
export { AuthService } from './lib/services/auth/auth.service';
export { AuthInterceptor } from './lib/interceptors/auth/auth.interceptors'