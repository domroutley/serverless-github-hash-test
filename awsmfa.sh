#!/bin/bash

echo "WARNING: This will unset your AWS_PROFILE so that you can temporarily assume an AWS admin role"
unset AWS_PROFILE
awsprofile=$1
mfa=$2

export $(python .awsmfa.py $awsprofile $mfa)
