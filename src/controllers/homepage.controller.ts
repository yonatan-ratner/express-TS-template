/**
 * Controller for handling the home route.
 * Renders the index page.
 */

import { Response, Request } from "express";

//import getIndexPage from "../templates/indexTemplate";

/**
 * Controller class for serving the home page.
 */
class homeController {
  /**
   * Serves the home page and generates a unique UUID for the session.
   * @param req - The HTTP request object.
   * @param res - The HTTP response object.
   */
  public static async serve(req: Request, res: Response) {
    // Generate a unique UUID for the session
    const uuid: string = crypto.randomUUID();
    req.session.uuid = uuid;

    // Render the index page
    //const html: string = getIndexPage();
    res.send(
      "<!DOCTYPE html><html><head><title>Home</title></head><body><h1>Welcome to the Home Page</h1></body></html>"
    );
  }
}

export default homeController;
