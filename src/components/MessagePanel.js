import React from 'react'
import StatusIcon from './StatusIcon'

const MessagePanel = () => {
    return (
        <div>
            <div class="header">
                {{ user.username }}
                <StatusIcon />
            </div>

            {/* <ul class="messages">
            <li
                v-for="(message, index) in user.messages"
                key="index"
                class="message"
            >
                <div v-if="displaySender(message, index)" class="sender">
                {{ message.fromSelf ? "(yourself)" : user.username }}
                </div>
                {{ message.content }}
            </li>
            </ul> */}

            {/* <form @submit.prevent="onSubmit" class="form">
            <textarea v-model="input" placeholder="Your message..." class="input" />
            <button :disabled="!isValid" class="send-button">Send</button>
            </form> */}
        </div>
    )
}

export default MessagePanel
