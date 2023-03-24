import React from "react";
import {
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    Flex,
} from "@chakra-ui/react";
import CButton from '../gui/CButton';

export type ConfirmCloseProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export const ConfirmClose: React.FC<ConfirmCloseProps> = ({ isOpen, onClose, onConfirm }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered={true}
            closeOnOverlayClick={true}
        >
            <ModalOverlay />
            <ModalContent bg={"#141414"} w={"90%"} p={5}>
                <Text color={"white"}>Toutes vos vidéo ajouter seront perdu !</Text>
                <Flex mt="30px" gap={2} w="100%">
                    <CButton onClick={onClose} text="Annuler" loading={false} fill={false} />
                    <CButton fill={true} onClick={onConfirm} text="Confirmer" loading={false} />
                </Flex>
            </ModalContent>
        </Modal>
    );
}