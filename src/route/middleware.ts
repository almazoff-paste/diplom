import { web } from "../app";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

web.use(cookieParser());
web.use(bodyParser.urlencoded());