# GazeIntent

## Project Plan

**Meeting Times**: Monday, Wednesday 7:00 - 8:00PM EST (1 hour)

**Zoom Link**: https://harvard.zoom.us/j/82654004922?pwd=bXE3SVo0L1lFajhLdmpTNld6MXlVUT09

**Github Repo**: https://github.com/mpbunch/E14ACNND3.git

**Website Design Template**: TBD

**Website Location**: https://gazeintent.herokuapp.com/ 

### Team Members

Yihan Zhou - zhanonly@gmail.com
Michael Lintott - mil623@g.harvard.edu
Matt Bunch - mattbunch@gmail.com

## Project Basics

The purpose of this project is to determine intent of gaze. Specifically, the intent of gaze while viewing a screen. We believe we can determine if someone is actively looking at a screen, for how long, as well as collect other bio/demo data about the user.


The project will be implemented using the following technologies: Python, Flask, and a Convolutional Neural Network


As an initial proof of concept, we will observe users through a web application with webcam support. The webcam data will be sent to a server where the data is passed through a CNN, features will be analyzed, and spit out for rendering. This returned metadata will be rendered within the web application to prove that we are able to accurately classify and represent the users gaze.

This foundational technology could be used within many industries:
1. Advertising, how valuable is my ad space actually worth
2. Airplanes, are people paying attention to the flight attendants
3. Enhanced web interface controls, allowing for non-motor individuals to control and interact with the web

Dataset:
Appearance-based Gaze Estimation in the Wild (MPIIGaze)
https://www.mpi-inf.mpg.de/departments/computer-vision-and-machine-learning/research/gaze-based-human-computer-interaction/appearance-based-gaze-estimation-in-the-wild


## Project Structure

/app/				- The folder containing the app.
/app/app.py			- The main app entry point
/app/templates		- Where the templates live.

/app/static			- Static files, etc.

/framework/			- ???.

The main components of the app are:

1. **Base** - This module contains the skeleton that the entire framework rests on. It is responsible
for checking for compatibility, as well as loading and securing the various sub-modules.

2. **Component X** - This component does X. It uses Google Tensorflow to do ...

3. **Component Y** - This component does Y. It uses Z to add W features.

## Project Timeline

1. Milestone 1: Determine the dataset

2. Milestone 2: Come up with the innovative metrics of gaze detection based on the dataset annotation. Example could be "Ask the users to open the webcam and the web app could indicate the gaze on the interface."

3. Milestone 3: Setup application hosting

4. Milestone 4: ML work
  Read papers: decide which network to use and how to train the networks
  Decide which framework to use (e.g. TensorFlow)
  Cloud service: “where to do the training”, or does anyone has a GPU to run the training locally
  Decide which data processing container to use:  docker, singularity
  After training, tuning the hyperparameters and network architecture
  Export trained network (ONNX?)

5. Milestone 5: Sketch the wireframe/prototype the web application and determine how to implement D3

6. Milestone 6: Build the frontend and backend of the web application

7. Milestone 7: Test & fine tune
