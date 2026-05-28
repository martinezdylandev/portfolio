import { dbQuery } from "../../config/databaseConfig.js";

export const getProjectBySlug = async (req: any, res: any) => {
   const projectSlug = req.params.projectSlug;

   if (!projectSlug) {
      return res.status(400).json({
         success: false,
         message: "Project slug is required",
      });
   }

   try {
      const result = await dbQuery("SELECT * FROM projects WHERE project_slug = $1", [projectSlug.toLowerCase()]);

      if (result.rows.length === 0) {
         return res.status(404).json({
            success: false,
            message: `Project with slug ${projectSlug} not found`,
         });
      } else {
         return res.json({
            success: true,
            data: result.rows[0],
         });
      }
   } catch (error) {
      console.error("Error fetching project:", error);
      return res.status(500).json({
         success: false,
         message: "Internal server error",
      });
   }
};

export const getAllProjects = async (_: any, res: any) => {
   try {
      const result = await dbQuery("SELECT * FROM projects");
      res.json({
         success: true,
         data: result.rows,
      });
   } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({
         success: false,
         message: "Internal server error",
      });
   }
};
