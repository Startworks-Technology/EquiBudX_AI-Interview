import type { InterviewModule } from './types';
import { frontendModule } from './frontend';
import { backendModule } from './backend';
import { fullstackModule } from './fullstack';
import { mobileModule } from './mobile';
import { databaseModule } from './database';
import { dataEngineerModule } from './data';
import { devopsModule } from './devops';
import { systemDesignModule } from './systemdesign';
import { securityModule } from './security';
import { aiModule } from './ai';
import { qaModule } from './qa';
import { softskillsModule } from './softskills';
import { eceEmbeddedModule, iotModule } from './ece';
import { productManagerModule, businessAnalystModule } from './business';

export const interviewModules: InterviewModule[] = [
  frontendModule,
  backendModule,
  fullstackModule,
  mobileModule,
  databaseModule,
  dataEngineerModule,
  devopsModule,
  systemDesignModule,
  securityModule,
  aiModule,
  qaModule,
  softskillsModule,
  eceEmbeddedModule,
  iotModule,
  productManagerModule,
  businessAnalystModule
];

export * from './types';

