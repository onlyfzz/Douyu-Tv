<template>
    <div id="todo">
        <header>Todos</header>
        <div class="main">
            <input type="text" 
                @keyup.enter="add" 
                placeholder="What needs to be down"
                v-model="newTodo">
            <div class="content">
                <ul class="list" v-show="tasks">
                    <li v-for="(task, index) in tasks">
                        <input type="checkbox" 
                        v-model="task.completed">
                        <label  :class="{ 'completed': task.completed }">    
                            {{ task.title }}
                        </label>
                        <button @click="remove(task)">关闭</button>
                    </li>
                </ul>
            </div>
            <footer>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </footer>
        </div>
    </div>
</template>

<script type="text/javascript">

    import {store} from 'common/js/store';

    export default {
        props: {
            tasks: Array
        },
        data() {
            return {
                newTodo: '',
                taskItem: {}
            };
        },
        methods: {
            add() {
                this.taskItem.title = this.newTodo;
                this.taskItem.completed = false;
                this.tasks.unshift(this.taskItem);
                this.taskItem = {};
                this.newTodo = '';
                store().set('task', this.tasks);
            },
            remove(todo) {
                this.tasks.splice(this.tasks.indexOf(todo), 1);
                store().set('task', this.tasks);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .main {
        .content {
            label.completed {
                text-decoration: line-through;
            }
        }
    }
</style>

