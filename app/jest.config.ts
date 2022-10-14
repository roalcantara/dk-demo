import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
};

export default config;