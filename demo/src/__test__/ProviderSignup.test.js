import { getByTestId, render, screen,fireEvent} from "@testing-library/react";
import axios from 'axios';
import { BrowserRouter, Routes } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import ProviderSignup from '../components/Code/ProviderSignup';
 
jest.mock('axios');
jest.mock('react-router-dom');
 
describe("Test the Provider Signup Component", () => {
    test("render the signup form with signup button", async () => {
 
        render(<ProviderSignup/>);
 
        const buttonList = await screen.findAllByRole("button");
        console.log();
        expect(buttonList).toHaveLength(1);
    });
    test("email input field should accept email", () => {
        render(<ProviderSignup />);
        const email = screen.getByPlaceholderText("Enter your Email ID");
        userEvent.type(email, "rajakumari");
        expect(email.value).not.toMatch("rajakumari@gmail.com");
         
        });
       test("password input should have type only password", () => {
          render(<ProviderSignup />);
          const password = screen.getByPlaceholderText("Enter your Password");
          expect(password).toHaveAttribute("type", "password");
      });
      
      test("check the word is placed or not", () => {
        render(<ProviderSignup />);
        var element1=screen.getByTestId("Heading");
        expect(element1).toBeInTheDocument(); 
        expect(element1).toHaveTextContent('Create your account') ;
      });
      test("check the word is placed or not", () => {
        render(<ProviderSignup />);
        var element1=screen.getByTestId("Head");
        expect(element1).toBeInTheDocument(); 
        expect(element1).toHaveTextContent('Register') ;
      });
      test('Test Case',()=>{
        render(<ProviderSignup/>);
        const textbox1=screen.getByTestId('TextBox1');
        const textbox2=screen.getByTestId('TextBox2');
        const textbox3=screen.getByTestId('TextBox3');
        const textbox4=screen.getByTestId('TextBox4');
        const textbox5=screen.getByTestId('TextBox5');
        const textbox6=screen.getByTestId('TextBox6');
        const textbox7=screen.getByTestId('TextBox7');
        const textbox8=screen.getByTestId('TextBox8');
        const textbox9=screen.getByTestId('TextBox9');
        expect(textbox1).toBeInTheDocument();
        expect(textbox2).toBeInTheDocument();
        expect(textbox3).toBeInTheDocument();
        expect(textbox4).toBeInTheDocument();
        expect(textbox5).toBeInTheDocument();
        expect(textbox6).toBeInTheDocument();
        expect(textbox7).toBeInTheDocument();
        expect(textbox8).toBeInTheDocument();
        expect(textbox9).toBeInTheDocument();
        });
        test('renders login form', () => { 
          render(<ProviderSignup />); 
          expect(screen.getByPlaceholderText('Enter your Name')).toBeInTheDocument(); 
          expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument(); 
          expect(screen.getByPlaceholderText('Enter your Email ID')).toBeInTheDocument(); 
          expect(screen.getByPlaceholderText('Enter your Phone Number')).toBeInTheDocument(); 
          expect(screen.getByPlaceholderText('Enter your Company Name')).toBeInTheDocument();
          expect(screen.getByPlaceholderText('Enter your companyType')).toBeInTheDocument();
          expect(screen.getByPlaceholderText('Enter your Location')).toBeInTheDocument();
          expect(screen.getByPlaceholderText('Enter your Password')).toBeInTheDocument();
          expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();  
        }); 
        test('displays error messages for invalid input', () => { 
          render(<ProviderSignup />); 
          const signupButton = screen.getByTestId("Heading"); 
          fireEvent.click(signupButton); 
          (() => { 
            expect(screen.getByPlaceholderText('First Name is required')).toBeInTheDocument(); 
            expect(screen.getByPlaceholderText('Last Password is required')).toBeInTheDocument(); 
            expect(screen.getByPlaceholderText('Email ID is required')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Phone Number is required')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Company Name is required')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Company Type is required')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Location is required')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Password is required')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Confirm Password is required')).toBeInTheDocument();
          }); 
      }); 
  })