function Process(state){
    this.state = state;
}

const singleton = (function(){
    function ProcessManager(){
        this.numProcess = 0;
    }
    let pManager;
    function createProcessManager(){
        pManager = new ProcessManager();
        return pManager;
    }
    return {
        getProcessManager: function(){
            if(!pManager){
                pManager = createProcessManager();
            }
            return pManager;
        }
    }
})();


const processManager = singleton.getProcessManager();
const processManager2 = singleton.getProcessManager();

console.log(processManager === processManager2);