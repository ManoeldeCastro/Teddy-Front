import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine
} from "single-spa-layout";
import layoutDefinition from "./router-frontend-layout.html";

const routing = constructRoutes(layoutDefinition);

const apps = constructApplications({
  routes: routing,
  loadApp({ name }) {
    return System.import(name);
  }
});

const layout = constructLayoutEngine({
  routes: routing,
  applications: apps
});

apps.forEach(app => registerApplication(app));

layout.activate();
start();
