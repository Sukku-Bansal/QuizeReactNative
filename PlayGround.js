import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { firebase } from '../config';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';



const PlayGround = ({ route }) => {

    const [question, setQuestion] = React.useState([]);
    const [selectedOption, setSelectedOption] = React.useState({});

    const [score, setScore] = React.useState(0);
    const [showResults, setshowResults] = React.useState(false);


    const { category } = route.params;

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {
        setSelectedOption({});
        setshowResults(false);
        const db = firebase.firestore();
        const questionsRef = db.collection('questions');
        const snapshot = await questionsRef.where('category', '==', category).get();

        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }

        const allQuestions = snapshot.docs.map(doc => doc.data());
        const suffleQuestion = allQuestions.sort(() => Math.random() - 0.5);
        setQuestion(suffleQuestion.slice(0, 10));
    };

    const handleOptionSelected = (questionIndex, option) => {
        setSelectedOption({
            ...selectedOption,
            [questionIndex]: option
        });
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        question.forEach((question, index) => {
            if (selectedOption[index] == question.correctOption) {
                correctAnswers++;
            }
        });

        setScore(correctAnswers);
        setshowResults(true);
    }


    return (
        <View style={styles.container}>

            <FlatList
                data={question}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>
                            {item.question}
                        </Text>

                        <TouchableOpacity
                            style={[styles.option, selectedOption[index] === 1 &&  styles.selectedOption,
                            showResults && item.correctOption === 1 &&   styles.correctOption,
                             showResults && selectedOption[index] === 1 &&
                            selectedOption[index] !== item.correctOption && styles.wrongOption]}

                            onPress={() => handleOptionSelected(index, 1)}
                            disabled={showResults}
                        >
                            <Text style={styles.optionText}>{item.option1}</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={[styles.option, selectedOption[index] === 2 &&
                                styles.selectedOption, showResults && item.correctOption === 2 &&
                            styles.correctOption, showResults && selectedOption[index] === 2 &&
                            selectedOption[index] !== item.correctOption && styles.wrongOption]}

                            onPress={() => handleOptionSelected(index, 2)}
                            disabled={showResults}
                        >
                            <Text style={styles.optionText}>{item.option2}</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={[styles.option, selectedOption[index] === 3 &&
                                styles.selectedOption, showResults && item.correctOption === 3 &&
                            styles.correctOption, showResults && selectedOption[index] === 3 &&
                            selectedOption[index] !== item.correctOption && styles.wrongOption]}

                            onPress={() => handleOptionSelected(index, 3)}
                            disabled={showResults}
                        >
                            <Text style={styles.optionText}>{item.option3}</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={[styles.option, selectedOption[index] === 4 &&
                                styles.selectedOption, showResults && item.correctOption === 4 &&
                            styles.correctOption, showResults && selectedOption[index] === 4 &&
                            selectedOption[index] !== item.correctOption && styles.wrongOption]}

                            onPress={() => handleOptionSelected(index, 4)}
                            disabled={showResults}
                        >
                            <Text style={styles.optionText}>{item.option4}</Text>
                        </TouchableOpacity>
                    </View>
                )}

            />

            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
                disabled={showResults}
            >

                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>

            {showResults && (
                <View style={styles.result}>

                    <Text style={styles.resultText}>
                        You scored {score} out of {question.length} </Text>

                    <TouchableOpacity style={styles.tryAgainButton}
                        onPress={getQuestions}>
                        <Text style={styles.tryAgainButtonText}>
                            Try Again
                        </Text>
                    </TouchableOpacity>
                </View>

            )}

        </View>
    )
}

export default PlayGround

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    listContainer: {
        paddingBottom: 20,
    },
    questionContainer: {
        marginBottom: 20,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    option: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#ffffff',
        borderRadius: 8,
    },
    selectedOption: {
        backgroundColor: '#d0ebff',
    },
    correctOption: {
        backgroundColor: '#d4edda',
    },
    wrongOption: {
        backgroundColor: '#f8d7da',
    },
    submitButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 20,
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    result: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultText: {
        fontWeight: 'bold',
        marginBottom: 10,
        marginVertical: 10,
        fontSize: 20,

    },

    tryAgainButton: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    tryAgainButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
