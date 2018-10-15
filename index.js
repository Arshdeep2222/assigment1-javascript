
const  app = new Vue({
    el: '#app',
    mounted: function(){
        fetch  ("https://my.api.mockaroo.com/email.json?key=85694220") 
        

.then(res => res.json())
.then(emails => {
this.emails = emails;
this.selectedEmail = this.emails[0];
this.isReady= true;

})
.catch(err => console.log(err));    
        },
    data: {
    message:"hello vue!",
    emails:[],
    selectedEmail:{},
    view:'inbox',
    isReady: false
        },

    methods: {
        getPic: function(emailObj) {
            return emailObj.avatar;
        },
				getalt(emailObj){
            return  `${emailObj.first} ${emailObj.last}'s avatar`;
        },
        clickedEmail: function(emailObj){
				this.selectedEmail = emailObj;
			},
			isSelected: function(emailObj){
            return emailObj == this.selectedEmail;
				},
				incomingEmail(){
					fetch  ("https://my.api.mockaroo.com/email.json?key=85694220") 
            
    
			.then(res => res.json())
			.then(emails => {
				this.emails.unshift(emails[0]);
    
				})
			.catch(err => console.log(err));  

				},
					currentView(){
								switch (this.view) {
						case "inbox":
            return this.emails.filter(email => !email.deleted);
            break;

            case 'Trash':
            return this.emails.filter(email => !email.deleted);
            break;

        }
        },
    
					setView(clickedView){
				this.View = clickedView;
					},
					deleteEmail(){
				this.$set(this.selectedEmail,"deleted", true);
				}
					}
}); 







const tweetBtn = document.querySelector('#compose');
tweetBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  const news = document.querySelector('.form');
  news.innerHTML = `
 <form action="assignment no. 2">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name">
  </div>
  <div>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_mail">
  </div>
  <div>
    <label for="mail">Upload picture:</label>
    <input type="file" id="mail" name="user_mail">
  </div>
  <div>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>
<button class="send">Send</button>
</form>
  `; 
   
  const send = document.querySelector('.send');
  send.addEventListener('click', (e) => {
    e.preventDefault();
  
    news.innerHTML = '<h1>Your message has been sent</h1>'
  })
});

   











