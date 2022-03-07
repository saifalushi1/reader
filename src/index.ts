import { MikroORM } from "@mikro-orm/core";
import { prod } from "./constants";

const main = async () => {
    const orm = await MikroORM.init({
        entities: [],
        dbName: 'tider',
        user: 'alushi',
        password: 'saif0427',
        type: 'postgresql',
        debug: !prod,
    });

}

main()


console.log("hello world")