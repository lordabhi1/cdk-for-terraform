import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { AwsProvider } from './.gen/providers/aws';
import { Instance } from './.gen/providers/aws/instance';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    
       new AwsProvider(this, 'aws', {
     region: 'us-east-1'
   });
 
   new Instance(this, 'Hello', {
     ami: "ami-2757f631",
     instanceType: "t2.micro"
   });

  }
}

const app = new App();
new MyStack(app, 'Cdk-For-Terraform');
app.synth();
