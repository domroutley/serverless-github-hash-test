from os import getenv, path
import sys
import getpass

import ConfigParser
import boto3

def main():
    """
    Check if user has their environmental variables set
    Otherwise it gets the necessary variables from user
    """
    aws_profile = sys.argv[1]

    mfa_device = getenv('MFA_DEVICE')
    if mfa_device is None:
        config = ConfigParser.ConfigParser()
        config.read(path.join(path.expanduser("~"), '.aws/credentials'))
        mfa_device = config.get(aws_profile, 'mfa_serial')

    # Create a boto3 session using your DOG account aws profile
    # A session manages state about a particular configuration.
    session = boto3.Session(profile_name=aws_profile)

    # Gets MFA time-based one-time password (TOTP)
    mfa_totp = sys.argv[2]

    # A low level client representing the AWS Security Token Service (STS)
    # Clients provide a low-level interface to AWS whose methods map close to 1:1 with service APIs
    client = session.client(
        'sts',
    )

    # Represents aws sts assume role with your own configurations
    response = client.assume_role(
        RoleArn="arn:aws:iam::395624612185:role/DevOpsGuysAdminAccess",
        RoleSessionName="automation_project_" + getpass.getuser(),
        SerialNumber=mfa_device,
        TokenCode=mfa_totp,
        DurationSeconds=3600
    )

    # Extracting required details from the output of response
    secret_access_key = response['Credentials']['SecretAccessKey']
    session_token = response['Credentials']['SessionToken']
    access_key_id = response['Credentials']['AccessKeyId']

    print("AWS_SECRET_ACCESS_KEY=" + secret_access_key + " AWS_SESSION_TOKEN=" + session_token +
          " AWS_ACCESS_KEY_ID=" + access_key_id)

if __name__ == "__main__":
    main()
