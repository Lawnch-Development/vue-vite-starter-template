import { mount } from "@cypress/vue";
import HelloWorld from "@/components/HelloWorld.vue";

describe("hello world component is working as expected", () => {
  it("renders the hello world component", () => {
    mount(HelloWorld, {
      props: {
        string: "World",
      },
    });
    cy.get("p").contains("Hello World!");
  });
});
