let mockRequest: any;
let mockResponse: any;
let statusSpy: any;
let jsonSpy: any;
let consoleErrorSpy: any;

const initializeMocks = (projectSlug: string) => {
   mockRequest = { params: { projectSlug } };
   mockResponse = { status: vi.fn().mockReturnThis(), json: vi.fn() };
   statusSpy = vi.spyOn(mockResponse, "status");
   jsonSpy = vi.spyOn(mockResponse, "json");
};

const deinitializeMocks = () => {
   statusSpy.mockRestore();
   jsonSpy.mockRestore();
};

const initializeConsoleErrorSpy = () => {
   consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
};

const restoreConsoleErrorSpy = () => {
   consoleErrorSpy.mockRestore();
};

export { mockRequest, mockResponse, statusSpy, jsonSpy, initializeMocks, deinitializeMocks, initializeConsoleErrorSpy, restoreConsoleErrorSpy };
