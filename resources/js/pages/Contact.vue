<template>
    <div class="container px-4">
        <form @submit.prevent="onFormSubmit">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                v-model="email" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="message"></textarea>
            </div>

            <div class="mb-3">
                <label for="formFile" class="form-label">Attachment</label>
                <input class="form-control" type="file" id="formFile" @change="onFileChange">
            </div>

            <button class="btn btn-primary">Invia</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                email:"",
                message:"",
                attachment: null
            }
        },
        methods: {
            onFileChange(e) {
                this.attachment = e.target.files[0]
            },
            onFormSubmit() {
                const formData = new FormData();

                formData.append("email", this.email)
                formData.append("message", this.message)
                formData.append("attachment", this.attachment)

                axios.post("/api/contacts", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(resp => {
                    console.log(resp.data);
                })
            }
        }
    }
</script>