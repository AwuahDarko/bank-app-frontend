<template>
<div class="mt-4">
    <!-- Tab links -->
    <div class="tab">
        <button ref="defaultOpen" class="tablinks send-back" @click="switchTab($event, 'London')">Internet Banking Tips</button>
        <button class="tablinks bring-front" @click="switchTab($event, 'Paris')"> Get In Touch </button>
        <hr>
    </div>
    <!-- Tab content -->
    <div ref="London" class="tabcontent mt-4">
        <p>Online banking is nice and convenient. But it does come with certain risks. Just as you hear of people being robbed at ATMs,
            or having their cards cloned, so online accounts are also a point of vulnerability.</p>
        <br>
        <p>Follow these 8 tips and you can minimise the risks to your finances and bank safely online:</p>
        <br>
        <ul class="info-container">
            <li class="info">Choose an account with two factor authentication</li>
            <li class="info">Create a strong password.</li>
            <li class="info">Avoid clicking through unknown emails.</li>
            <li class="info">Access your accounts from a secure location.</li>
            <li class="info">Always log out when you are done.</li>
            <li class="info">Set up account notifications (if available).</li>
            <li class="info">Monitor your accounts regularly.</li>
        </ul>
    </div>
    <div ref="Paris" class="tabcontent">
        <div class="box">
            <p> <strong>Mr. Glonn Jens </strong> on {{ fullDate }}</p>
            <br>
            <p>With our internet banking, you can use the secure messaging service
                to ask us a question about your account.
                We'll aim to get back to you within 48 working hours..</p>
        </div>
        <form class="bk-col bk-gap-1">
            <div class="bk-col">
                <label for="reason">Enter Reason:</label>
                <input type="text" name="reason" id="reason">
            </div>
            <div class="bk-col">
                <label for="contact">Enter contact email:</label>
                <input type="text" name="contact" id="contact">
            </div>
            <div class="bk-col">
                <label for="phone">Enter contact phone:</label>
                <input type="text" name="phone" id="phone">
            </div>
            <div class="bk-col">
                <label for="message">Your Message:</label>
                <textarea name="message" id="message" cols="30" rows="7"></textarea>
            </div>
            <input type="submit" value="Send">
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: 'SecurityInfo',
    methods: {
        switchTab(evt, cityName) {
            // Declare all variables
            var i, tabcontent, tablinks;

            // Get all elements with class="tabcontent" and hide them
            tabcontent = this.$el.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = this.$el.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
                tablinks[i].className = tablinks[i].className.replace(" bring-front", " send-back");
            }

            // Show the current tab, and add an "active" class to the button that opened the tab
            this.$refs[cityName].style.display = "block";
            evt.currentTarget.className += " active bring-front";
        }
    },
    mounted() {
        this.$refs.defaultOpen.click()
    },
    computed: {
        fullDate: function () {
            const d = new Date();
            return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDay()
        }
    }
}
</script>

<style scoped>
/* ============ Tabs =========== */

.tab {
    overflow: hidden;
    border: 1px solid var(--bk-deep-gray);
    /* background-color: #f1f1f1; */
    border-top: none;
    height: 50px;
    position: relative;
}

.tab hr {
    position: absolute;
    bottom: 3px;
    left: 0;
    right: 0;
    border-color: var(--bk-deep-gray);
    z-index: 10;
}

/* Style the buttons that are used to open the tab content */
.tab button {
    background-image: linear-gradient(rgb(235, 233, 233), white);
    float: left;
    border: none;
    border-top: 1px solid var(--bk-deep-gray);
    border-left: 1px solid var(--bk-deep-gray);
    border-right: 1px solid var(--bk-deep-gray);
    outline: none;
    cursor: pointer;
    padding: 5px 16px;
    transition: 0.3s;
    margin-right: 4px;
    position: relative;
    font-size: 0.8rem;

}

.send-back {
    z-index: 1;
}

.bring-front {
    z-index: 100;
}

/* Change background color of buttons on hover */
.tab button:hover {
    background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
    /* background-color: #fff; */
    background-image: linear-gradient(white, white);

}

/* Style the tab content */
.tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid var(--bk-deep-gray);
    border-top: none;
}

.tabcontent {
    animation: fadeEffect 1s;
    /* Fading effect takes 1 second */
}

/* Go from zero to full opacity */
@keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.info {
    list-style: disc;
    font-size: 0.85rem;
}

.info-container {
    padding: 5px 30px;
}

p {
    font-size: 0.8rem;
    margin-bottom: 0px;
}

.box {
    margin: 10px 2px;
    border: 1px solid var(--bk-deep-gray);
    padding: 10px 10px;
}

label {
    margin-bottom: 0;
    font-size: 0.8rem;
    font-weight: bold;
}

input,
textarea {
    width: 20%;
    background: #F8F8F8;
    border: 1px solid #E4E4E4;
    padding: 7px;
    margin-left: 0px;
    margin-right: 0px;
    font-size: 14px;
}

textarea {
    width: 100%;
}

input[type="submit"] {
    margin: 0;
    height: 26px;
    line-height: 26px;
    padding: 0px 10px;
    cursor: pointer;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    background: #1a2c3a;
    border: none;
}
</style>
