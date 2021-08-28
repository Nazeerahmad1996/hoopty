const WorkorderModal = require("./WorkorderModal")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new WorkorderModal.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
