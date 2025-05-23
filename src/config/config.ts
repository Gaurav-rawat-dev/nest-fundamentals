export default () => ({
  MONGODB_URI: process.env.MONGODB_URI,
  port: parseInt(process.env.PORT || "4000", 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || "27017", 10) || 5432
  }
});

    