<template>
  <div class="chatter">
    <h1 class="title">Chatter</h1>

    <div class="message-board">
      <ul class="message-list">
        <li
          class="message"
          v-for="message in calcElapsedTime"
          :key="message.id"
        >
          {{ message.message }} || {{ message.date }} {{ message.timeUnit }}
        </li>
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
    calcElapsedTime() {
      return this.messages.map(message => {
        let messageCreatedAt = message.date;
        let actualDate = Date.now();
        let elapsedTime = Math.floor((actualDate - messageCreatedAt) / 1000);
        let convertedTime;
        let unit;

        if (elapsedTime >= 60 && elapsedTime <= 3599) {
          convertedTime = Math.floor(elapsedTime / 60);
          unit = "minutes ago";
        } else if (elapsedTime >= 3600 && elapsedTime <= 86399) {
          convertedTime = Math.floor(elapsedTime / 3600);
          unit = "hours ago";
        } else if (elapsedTime >= 86400 && elapsedTime <= 604799) {
          convertedTime = Math.floor(elapsedTime / 86400);
          unit = "days ago";
        } else if (elapsedTime >= 604800) {
          convertedTime = messageCreatedAt;
        } else {
          convertedTime = elapsedTime;
          unit = "seconds";
        }

        return {
          message: message.message,
          id: message.id,
          date: convertedTime,
          timeUnit: unit
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
  background-color: rgba(255, 255, 255, 0.2);
  height: 70vh;
  width: 50vw;
  margin: auto;
  border: #d4e0e6 solid 1px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px grey;
}

.message-list {
  padding: 0;
}

.message {
  margin: auto;
  padding-left: 5px;
  border: #d4e0e6 solid 1px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px grey;
  list-style-type: none;
}

.message-response {
  height: 20px;
  width: 30%;
  margin: 5px;
  text-align: center;
  border: #d4e0e6 solid 1px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px grey;
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
  box-shadow: 2px 2px 10px grey;
}

.title {
  margin-top: 0px;
  text-align: center;
}
</style>
