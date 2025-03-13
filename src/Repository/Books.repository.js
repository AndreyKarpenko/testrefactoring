import ApiGateway from "../Shared/ApiGateway.js";

class BooksRepository {
  constructor() {
    this.httpGateway = new ApiGateway();
  }

  getAllBooks = async () => {
    return await this.httpGateway.get("/");
  };

  getPrivateBooks = async () => {
    return await this.httpGateway.get("/private");
  };

  addBook = async ({ name, author }) => {
    const bookAddDto = await this.httpGateway.post("/", { name, author });
    return !!(bookAddDto && bookAddDto.status === "ok");
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
