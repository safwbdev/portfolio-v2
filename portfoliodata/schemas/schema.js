// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import user from "./user";
import skill from "./skill";
import education from "./education";
import work from "./work";
import project from "./project";
import future from "./future";
import blockContent from "./blockContent";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    user,
    skill,
    education,
    work,
    project,
    blockContent,
    future,
  ]),
});
