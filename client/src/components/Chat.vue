<template>
  <div class="chatter">
    <h1 class="title">Chatter</h1>

    <div class="message-board">
      <ul class="message-list">
        <template v-for="(post, index) in calcDateFormat">
          <div class="post" :key="index + 1">
            <li :key="post.id">{{ post.message }}</li>
            <li class="message-date" :key="index">{{ post.date }}</li>
          </div>
        </template>
      </ul>
    </div>

    <div class="message-form">
      <form>
        <label for="message"></label>
        <input class="message-input" type="text" v-model="message" />
        <button @click.prevent="addMessage">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import dateFormat from "dateformat";

export default {
  data() {
    return {
      messages: [],
      message: null
    };
  },
  methods: {
    addMessage() {
      const messageData = {
        message: this.message,
        id: Math.floor(Math.random() * 1000000),
        date: Date.now()
      };

      this.messages.push(messageData);
      this.message = null;
    }
  },
  computed: {
    calcDateFormat() {
      return this.messages.map(message => {
        const messageCreatedAt = message.date;
        const formattedDate = dateFormat(
          messageCreatedAt,
          "dddd, mmmm dS, yyyy, h:MM:ss TT"
        );

        return {
          message: message.message,
          id: message.id,
          date: formattedDate
        };
      });
    }
  }
};
</script>

<style scoped>
.chatter {
  height: 100vh;
  width: 100vw;
}

.message-board {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  background-color: rgba(255, 255, 255, 0.1);
  height: 70vh;
  width: 50vw;
  margin: auto;
  border: #d4e0e6 solid 1px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgb(20, 20, 20);
}

.message-list {
  padding: 0;
}

.post {
  color: goldenrod;
  border: #d4e0e6 solid 1px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgb(20, 20, 20);
  margin: 5px auto;
  padding-left: 5px;
  list-style-type: none;
}

.message-date {
  font-size: 10px;
  color: rgb(177, 177, 177);
}

.message-form {
  height: 30px;
  width: 50vw;
  margin: auto;
}

.message-input {
  height: auto;
  width: 50vw;
  padding: 0;
  margin: 0;
  border: #d4e0e6 solid 1px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgb(20, 20, 20);
}

.title {
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
  color: goldenrod;
}
</style>
