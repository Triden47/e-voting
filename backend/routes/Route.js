import express, { response } from "express";

import Poll from "../model/poll.js";
import Candidate from "../model/candidate.js";

const route = express.Router();

route.post("/createPoll", async (req, res) => {
  const newPoll = new Poll(req.body);
  try {
    let response = {};
    await newPoll.save(function (err, doc) {
      response.id = doc._id;
      response.msg = "Poll saved successfully";
      res.status(200).json(response);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

route.post("/addCandidate", async (req, res) => {
  console.log(req.body);
  const newCandidate = new Candidate(req.body);
  try {
    await newCandidate.save();
    res.status(200).json("Candidate saved successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});
// route.post('/createPoll', async (req, res) => {
//     // console.log(req.body)
//     try {
//         const exist = await User.findOne({ googleId: req.body.googleId })

//         if(exist)
//         {
//             res.status(200).json('User already exists')
//             return
//         }

//         const newUser = new User(req.body)
//         await newUser.save()
//         res.status(200).json('User saved successfully')
//     } catch(error) {
//         res.status(500).json(error)
//     }
// })

// route.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({})
//         res.status(200).json(users)
//     } catch(error) {
//         res.status(500).json(error)
//     }
// })

// route.post('/conversation/add', async (req, res) => {
//     let senderId = req.body.senderId
//     let receiverId = req.body.receiverId
//     try {
//         const exist = await Conversation.findOne({ members: { $all: [ senderId, receiverId ]}})
//         if(exist) {
//             res.status(200).json('Conversation already exists')
//             return
//         }

//         const newConversation = new Conversation({
//             members: [senderId, receiverId]
//         })
//         await newConversation.save()
//         res.status(200).json('Conversation added successfully')

//     } catch(error) {
//         res.status(500).json(error)
//     }
// })

// route.post('/conversation/get', async (req, res) => {
//     try {
//         const conversation = await Conversation.findOne({ members: { $all: [ req.body.sender, req.body.receiver ] } })
//         // console.log(conversation)
//         res.status(200).json(conversation)

//     } catch(error) {
//         res.status(500).json(error)
//     }
// })

// route.get('/message/get/:id', async (req, res) => {
//     try {
//         const messages = await Message.find({ conversationId: req.params.id })
//         res.status(200).json(messages)
//     } catch(error) {
//         res.status(500).json(error)
//     }
// })
export default route;