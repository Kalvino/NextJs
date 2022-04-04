const _id_ = require("../[id]")
// @ponicode
describe("_id_.getStaticProps", () => {
    test("0", async () => {
        await _id_.getStaticProps({ params: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } })
    })

    test("1", async () => {
        await _id_.getStaticProps({ params: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } })
    })

    test("2", async () => {
        await _id_.getStaticProps({ params: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } })
    })

    test("3", async () => {
        await _id_.getStaticProps({ params: { id: "" } })
    })
})
