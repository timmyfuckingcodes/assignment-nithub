

class Task {
    private id :number;
    private Month :string;
    private Taskdescription :string;
    constructor(id:number,Month :string ,Taskdescription :string) {
     this.Taskdescription = Taskdescription;
     this.id = id;
     this.Month = Month; 
    

    }

   get getMonth() :string{
      return this.Month;
   }
   get getId() :number{
      return this.id;
 }
 get getDescription() :string{
    return this.Taskdescription;
}
set setMonth(month:string) {
    this.Month = month;
 }
 set setId(id:number) {
   this.id = id ;
}
set setDescription(description:string) {
   this.Taskdescription = description;
}
}

class TaskManager {
     Tasks :Task[] ;
     constructor( ){
        this.Tasks = [] 
     }

    create(id:number,month :string,Taskdescription :string){
    const tasks = new Task(id,month,Taskdescription);
    this.Tasks.push(tasks);
    }
    update(id: number,month? :string,Taskdescription? :string){
       for (const task of this.Tasks) {
            if (task.getId === id) {
                if (month) task.setMonth = month;
                if (Taskdescription) task.setDescription = Taskdescription;
            }
            }

    
    }
    complete(id :number, month? :string,Taskdescription? :string){
        for (const task of this.Tasks) {
            if (task.getId === id) {
                if (month) task.setMonth = month;
                if (Taskdescription) task.setDescription = Taskdescription;
            }
        }
    
   
}
getTasks() :Task[]{
    console.log(this.Tasks)
    return this.Tasks;
    
   }
}


const Manager = new TaskManager();
Manager.create(1,"January","Learn a new programming lannguuage");
Manager.create(2,"January","Learn a new programming lannguuage");
Manager.create(3,"January","Learn a new programming lannguuage");

Manager.getTasks()
