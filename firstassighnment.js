var Task = /** @class */ (function () {
    function Task(id, Month, Taskdescription) {
        this.Taskdescription = Taskdescription;
        this.id = id;
        this.Month = Month;
    }
    Object.defineProperty(Task.prototype, "getMonth", {
        get: function () {
            return this.Month;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "getDescription", {
        get: function () {
            return this.Taskdescription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "setMonth", {
        set: function (month) {
            this.Month = month;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "setDescription", {
        set: function (description) {
            this.Taskdescription = description;
        },
        enumerable: false,
        configurable: true
    });
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.Tasks = [];
    }
    TaskManager.prototype.create = function (id, month, Taskdescription) {
        var tasks = new Task(id, month, Taskdescription);
        this.Tasks.push(tasks);
    };
    TaskManager.prototype.update = function (id, month, Taskdescription) {
        for (var _i = 0, _a = this.Tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            if (task.getId === id) {
                if (month)
                    task.setMonth = month;
                if (Taskdescription)
                    task.setDescription = Taskdescription;
            }
        }
    };
    TaskManager.prototype.complete = function (id, month, Taskdescription) {
        for (var _i = 0, _a = this.Tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            if (task.getId === id) {
                if (month)
                    task.setMonth = month;
                if (Taskdescription)
                    task.setDescription = Taskdescription;
            }
        }
    };
    TaskManager.prototype.getTasks = function () {
        console.log(this.Tasks);
        return this.Tasks;
    };
    return TaskManager;
}());
var Manager = new TaskManager();
Manager.create(1, "January", "Learn a new programming lannguuage");
Manager.create(2, "January", "Learn a new programming lannguuage");
Manager.create(3, "January", "Learn a new programming lannguuage");
Manager.getTasks();
