import { compat, types as T } from "../deps.ts";

export const migration: T.ExpectedExports.migration =
  compat.migrations.fromMapping({}, "0.8.0");
