import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // This is a static landing page.
  // The lead form is handled purely on the client-side and redirects to WhatsApp.
  // No backend API routes are needed.

  return httpServer;
}