

body
{
  font-size: 80%;
  font-size: 80%;
  color: bla;
  background-image: 
}


.container {
  max-width: 955px;
  background: url('bg.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
  border-color: yellow;
  border: solid;
  border-radius: 20px;
  margin: auto;
  height: 60vh;
  overflow-y: auto;
  margin-bottom: 23px;
  padding: 20px;
}

#navbar {
  display: flex;
  align-items: center;
  position: relative;
  height: 20%;
  width: 100%;
  margin-top: -65px;
  color: yellow;

}

#logo {
  height: 80px;
  margin: 1px 2px;
}

#logo img {
  height: 59px;
  margin: 15px 1px;
}

#navbar ul {
  display: flex;
  margin: 0;
  padding: 0;
}

#navbar::before {
  content: "";
  
  position: absolute;
  height: 50%;
  width: 100%;
  z-index: -1;
  opacity: 0.89;
  
}

#navbar ul li {
  list-style: none;
  font-size: 1.3rem;
}

#navbar ul li a {
  color: white;
  display: block;
  padding: 10px 22px;
  border-radius: 20px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

#navbar ul li a:hover {
  color: white;
  background-color: blue;
}

.message {
  background-color: beige;
  color: bla;
  width: 24%;
  padding: 20px;
  margin: 17px 12px;
  border: 2px solid black;
  border-radius: 20px;
  height: 20%;
  width: 65%;
  font-family: cursive;
}

.right {
  float: right;
  clear: both;
}

.left {
  float: left;
  clear: both;
}

#send-container {
  display: block;
  margin: auto;
  text-align: center;
  padding: 20px;
  border-radius: 20px;
}

.btn {
  background-color: yellow;
  cursor: pointer;
  border: 2px solid black;
  border-radius: 20px;
  height: 34px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  width: 50%;
  color: black;

}

.btn:hover {
  background-color: blue;
  color: white;
}

body {
  height: 100vh;
  background-color: black;
  padding: 20px;
}

#messageInp {
  margin: 10px 0;
  height: 30px;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px;
  background-color: white;
  color: white;
  background-color: white;
}
.container2
{
  height: 95%;
  width: 95%;
}
