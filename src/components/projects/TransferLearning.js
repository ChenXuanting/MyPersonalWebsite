import {
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Stack,
    Flex,
    Heading,
    Button,
    Image,
    Collapse,
    HStack,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Code,
    Link,
    useDisclosure,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { InlineMath, BlockMath } from 'react-katex';
import TransferLearning from '../../images/TransferLearning.png'
import SpotTuneFigure from '../../images/SpotTuneFigure.png'
import SpotTuneAccuracy from '../../images/SpotTuneAccuracy.png'

import ADTrainingError from '../../images/ADTrainingError.png'
import ADTestingError from '../../images/ADTestingError.png'
import ADOutputSample from '../../images/ADOutputSample.png'

const OffenEval = () => {
    const isBase = useBreakpointValue({ base: true, md: false });
    const { isOpen, onToggle } = useDisclosure();

    return(
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="elevated"
          my={1}
          id="project-1"
        >
          <Stack>
            <CardHeader pb={0}>
              <HStack alignItems="flex-start">
              <Image
                objectFit="cover"
                maxW={{ base: '150px', sm: '200px' }}
                src={TransferLearning}
                alt="Transfer Learning Case Study"
              />
              <Stack>
              <Heading size="md" fontFamily="'Montserrat', sans-serif">Transfer Learning Case Study: SpotTune </Heading>
              <Text py={2} fontFamily="'Montserrat', sans-serif">
              In this project, we explore Transfer Learning, a technique that leverages previously acquired knowledge to enhance the training process of a new task.
              Our work includes a comprehensive literature review of studies across different Machine Learning domains.
                {!isBase && ' Specifically, we concentrate on the paper "SpotTune: Transfer Learning through Adaptive Fine-tuning," implementing its concepts on LSTM to yield insights and draw conclusions from our results.'}
              </Text>
              </Stack>
              </HStack>
            </CardHeader>
            <Collapse in={isOpen} animateOpacity>
              <CardBody display="flex" alignItems="flex-end" flexDirection="column">
                <Box w={{ base: '95%', sm: '85%' }}>
                <Heading size="sm">Motivation</Heading>
                <Text py={2}>
                Researchers often face challenges such as inadequate resources and limited datasets, which hinder the proper training of models.
                Additionally, constrained time can lead to underdeveloped models.
                These challenges underscore the importance of studying Transfer Learning, a method that utilizes pre-existing knowledge to speed up the training process and reduce data requirements for model convergence.
                However, further research is essential to ensure that this knowledge transfer enhances, rather than hinders, model performance.
                </Text>
                <Heading size="sm">Literature review</Heading>
                <Text py={2}>
                  We have reviewed the following papers:
                </Text>
                <Text py={2}>
                <Link href="https://www.cv-foundation.org/openaccess/content_cvpr_2014/papers/Girshick_Rich_Feature_Hierarchies_2014_CVPR_paper.pdf" isExternal color="blue.500">
                    "Rich feature hierarchies for accurate object detection and semantic segmentation."
                  </Link> by Girshick et al.<br />
                <Link href="https://openaccess.thecvf.com/content_CVPR_2019/papers/Guo_SpotTune_Transfer_Learning_Through_Adaptive_Fine-Tuning_CVPR_2019_paper.pdf" isExternal color="blue.500">
                    "SpotTune: Transfer Learning through Adaptive Fine-tuning."
                </Link> by Guo et al.<br />
                <Link href="https://proceedings.mlr.press/v80/wei18a/wei18a.pdf" isExternal color="blue.500">
                    "Transfer Learning via Learning to Transfer."
                </Link> by Wei et al.<br />
                <Link href="https://proceedings.mlr.press/v37/long15.pdf" isExternal color="blue.500">
                    "Learning Transferable Features with Deep Adaptation Networks."
                </Link> by Long et al.<br />
                <Link href="https://arxiv.org/pdf/1602.04433.pdf" isExternal color="blue.500">
                    "Unsupervised domain adaptation with residual transfer networks."
                </Link> by Long et al.<br />
                <Link href="https://proceedings.neurips.cc/paper_files/paper/2021/file/a440a3d316c5614c7a9310e902f4a43e-Paper.pdf" isExternal color="blue.500">
                    "Provably Efficient Multi-Task Reinforcement Learning with Model Transfer."
                </Link> by Zhang et al.
                </Text>
                <Heading size="sm">SpotTune summary</Heading>
                <Text py={2}>
                A common problem arises when implementing practices of transfer learning. Given so many
                parameters in our pre-trained model, fine-tuning the whole network of parameters may often lead to
                overfitting. Many previous papers have proposed to freeze the last few layers of the network but even
                then choosing the right parameters to freeze in the first initial layers is manual and hard to optimize.<br/>
                <br/>
                SpotTune approaches this problem with an input-dependent layer freezing technique. SpotTune does
                this by creating a policy network that determines which layers to freeze or fine-tune. The decision is
                determined by a lightweight neural network. This decision network is trained with the model, but
                due to the fact that these decision functions are non-differentiable, SpotTune uses Gumbel Softmax
                sampling.<br/>
                <br/>
                The equation for the output becomes:
                </Text>
                <Flex w="100%" justify="center">
                <InlineMath math="x_l=I_l(x)F_{tl}(x_{l-1})+(1-I_l(x))F_{fl}(x_{l-1})+x_{l-1}"/>
                </Flex>
                <Text py={2}>
                Where <InlineMath math="I_l(x)"/> is a binary random variable obtained from our policy network, determining whether we
                    should freeze or fine-tune our layer. <InlineMath math="F_{tl}"/> is our fine-tuned layer and <InlineMath math="F_{tl}"/> is our frozen layer.<br/><br/>
                    SpotTune's main contribution is through creating a learnable optimizer to generate and decide on
                the best parameters to finetune in our transfer learning model.
                </Text>
                <Image
                      objectFit="cover"
                      src={SpotTuneFigure}
                      alt="Figure showing how SpotTune works"
                      maxW={{base:"100%", xl:"80%"}}
                    />
                <Heading size="sm">Experiment</Heading>
                <Text py={2}>
                  We apply SpotTune on an LSTM network as opposed to its original implementation on ResNet to test the transferability of the method.
                  For the transfered LSTM, we train the model on the <Link href="https://archive.ics.uci.edu/dataset/256/daily+and+sports+activities" isExternal color="blue.500">
                  Daily and Sports Activities Dataset
                  </Link>{' '} first. Then, we train the network on the <Link href="https://archive.ics.uci.edu/dataset/240/human+activity+recognition+using+smartphones" isExternal color="blue.500">
                  Human Activity Recognition Using Smartphones Dataset
                  </Link>{' '}, while a baseline LSTM is trained directly on the latter.
                </Text>
                <Text py={2}>
                  Key code segment 0: initilization of the hidden states of the agent net<br />
                </Text>
                <Code colorScheme="teal" variant="subtle" my={2}>
                    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{`def init_hidden(self, batch_size):
        ''' Initialize hidden state'''
        # Create two new tensors with sizes n_layers x batch_size x n_hidden,
        # initialized to zero, for hidden state and cell state of LSTM
        weight = next(self.parameters()).data
        # if (train_on_gpu):
        if (torch.cuda.is_available() ):
            hidden = (weight.new(self.n_layers, batch_size, self.n_hidden).zero_().cuda(),
                weight.new(self.n_layers, batch_size, self.n_hidden).zero_().cuda())
        else:
            hidden = (weight.new(self.n_layers, batch_size, self.n_hidden).zero_(),
                weight.new(self.n_layers, batch_size, self.n_hidden).zero_())

        return hidden`}</pre>
                  </Code><br />
                  <Text py={2}>
                  Key code segment 1: frozen mechanism in the forward pass of the LSTM network<br />
                </Text>
                <Code colorScheme="orange" variant="subtle" my={2}>
                    <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{`def lstm_output(self, lstm, lstm_frozen, policy, x, n_input):
    for i in range(len(policy)):
      ax = torch.reshape(x[i], (1, 125, n_input))
      if policy[i] == 0.:
        out_i, (_, _) = lstm_frozen(ax)
      else:
        out_i, (_, _) = lstm(ax)
      if i == 0:
        out = out_i
      else:
        out = torch.cat((out, out_i), 0)
    return out
  def forward(self, x, policy = None):
        out = self.lstm_output(self.lstm1, self.lstm1_frozen, policy[:, 0], x, self.n_input)
        #out, (hn,cn) = policy[:,0]*self.lstm1(x)+(1-policy[:,0])*self.lstm1_frozen(x)
        #out, (hn,cn) = policy[:,1]*self.lstm2(x)+(1-policy[:,1])*self.lstm2_frozen(x)
        out = self.lstm_output(self.lstm2, self.lstm2_frozen, policy[:, 1], out, self.n_hidden)
        #out, (hn,cn) = policy[:,2]*self.lstm3(x)+(1-policy[:,2])*self.lstm3_frozen(x)
        out = self.lstm_output(self.lstm3, self.lstm3_frozen, policy[:, 2], out, self.n_hidden)
        out = self.fc1(self.drop1(out))
        #out = self.fc2(self.drop1(out[:,:,0]))
        #out = self.fc1(out)
        out = self.fc2(out[:,:,0])
        out = self.activation(out)
        return out #(torch.argmax(out, dim = 1) + 1)`}</pre>
                  </Code><br />
                <Heading size="sm">Result</Heading>
                <Text py={2}>
                    We did not observe decisive improvements when we apply transfer learning on LSTM using the SpotTune strategy:
                </Text>
                <Flex justifyContent="center" alignItems="center">
                <Image
                      objectFit="cover"
                      src={SpotTuneAccuracy}
                      alt="Figure showing the comparison of the SpotTuned LSTM and original LSTM"
                      maxW={{base:"100%", xl:"80%"}}
                    />
                </Flex>
                <Heading size="sm">Comment</Heading>
                <Text py={2}>
                    In this experiment, we test the transferability of the SpotTune transfer learning strategy. However, in our context, the method did not show significant improvement. Here are
                    a few possible reasons/limitations: 1) The authors suggest that current successful multi-path deep architectures such as ResNets behave like ensembles of shallow networks (see original paper), while LSTMs do
                    not behave alike; 2) Implementing SpotTune on LSTM is challenging as each layer encapsulates both long and short-term memory, with freezing a layer impacting a large and important portion of the model; 3) SpotTune's goal to preserve shared feature representations while finetuning dataset-specific ones may conflict with LSTM's mechanism of
                    balancing long-term general characteristics and short-term data-specific memories, potentially leading to interference when applied together.
                 </Text>
                </Box>
              </CardBody>
            </Collapse>
            <CardFooter pt={0} gap={4} display='flex' alignContent='center' justifyContent='center'>
              <Heading display='flex' flexDirection='column' alignContent='center' justifyContent='center' size='xs'>Dec 2022</Heading>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={onToggle}
              >
                {isOpen ? 'Hide detail' : 'Show detail'}
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        )
}

export default OffenEval;