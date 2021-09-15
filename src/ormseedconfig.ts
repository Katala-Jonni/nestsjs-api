import config from '@app/ormconfig';

const ormSeedConfig = {
  ...config,
  migrations: [__dirname + '/seeds/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/seeds',
  },
};

export default ormSeedConfig;
